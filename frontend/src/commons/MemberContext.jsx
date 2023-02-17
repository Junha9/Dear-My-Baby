import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { apiGetMemberToken, apiGetMember, apiLoginMember, apiLogoutMember } from '@/commons/api/member';

const MemberContext = createContext(null);
const MemberAuthContext = createContext(null);
const MemberReloadContext = createContext(null);
const MemberMethodContext = createContext(null);

export function MemberProvider({ children }) {
  const [member, setMember] = useState(null);
  const [token, setToken] = useState(null);

  const auth = useCallback(
    async function (callback) {
      let accessToken = token;

      if (accessToken != null) {
        // console.log('auth : try with existing token... ' + accessToken);

        try {
          return await callback(accessToken);
        } catch (error) {
          // console.log('auth : failed with existing token');
        }
      }

      // console.log('auth : try to reissue token...');

      try {
        const response = await apiGetMemberToken();
        accessToken = response.data;
        setToken(accessToken);
      } catch (error) {
        throw new Error('auth : failed to reissue token');
      }

      // console.log('auth : try with reissued token... ' + accessToken);
      return await callback(accessToken);
    },
    [token],
  );

  const reload = useCallback(
    async function () {
      try {
        const response = await auth((accessToken) => apiGetMember(accessToken));
        const newMember = response.data;
        setMember(newMember);
      } catch (error) {
        setMember(null);
      }
    },
    [auth],
  );

  const login = useCallback(async function (memberId, password) {
    const response = await apiLoginMember(memberId, password);
    const accessToken = response.data;
    setToken(accessToken);
    setMember((await apiGetMember(accessToken)).data);
  }, []);

  const logout = useCallback(
    async function () {
      try {
        await auth((accessToken) => apiLogoutMember(accessToken));
      } finally {
        setMember(null);
        setToken(null);
      }
    },
    [auth],
  );

  return (
    <MemberContext.Provider value={member}>
      <MemberAuthContext.Provider value={auth}>
        <MemberReloadContext.Provider value={reload}>
          <MemberMethodContext.Provider value={{ login, logout }}>{children}</MemberMethodContext.Provider>
        </MemberReloadContext.Provider>
      </MemberAuthContext.Provider>
    </MemberContext.Provider>
  );
}

export function useMember() {
  return useContext(MemberContext);
}

export function useMemberAuth() {
  return useContext(MemberAuthContext);
}

export function useMemberReload() {
  return useContext(MemberReloadContext);
}

export function useMemberMethod() {
  return useContext(MemberMethodContext);
}

MemberProvider.propTypes = {
  children: PropTypes.node,
};
