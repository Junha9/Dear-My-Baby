import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Home from '@/pages/home';
import User from '@/pages/user';
import Plan from '@/pages/plan';
import Record from '@/pages/record';
import Album from '@/pages/album';

import KidsInformation from '@/pages/user/KidsInformation';
import FamilyForm from '@/pages/user/FamilyForm';
import Login from '@/pages/user/Login';
import Signup from '@/pages/user/SignUp';

// User, lazily loaded components
const UserInfo = lazy(() => import('@/pages/user').then((module) => ({ default: module.UserInfo })));

// Plan, lazily loaded components
const FindCity = lazy(() => import('@/pages/plan').then((module) => ({ default: module.FindCity })));
const PlaceCart = lazy(() => import('@/pages/plan').then((module) => ({ default: module.PlaceCart })));
const SelectDate = lazy(() => import('@/pages/plan').then((module) => ({ default: module.SelectDate })));
const SelectGroup = lazy(() => import('@/pages/plan').then((module) => ({ default: module.SelectGroup })));
const SelectPlace = lazy(() => import('@/pages/plan').then((module) => ({ default: module.SelectPlace })));

// Record, lazily loaded components
const RecordMap = lazy(() => import('@/pages/record').then((module) => ({ default: module.RecordMap })));

// Album, lazily loaded components
const AlbumList = lazy(() => import('@/pages/album').then((module) => ({ default: module.AlbumList })));
const AlbumMap = lazy(() => import('@/pages/album').then((module) => ({ default: module.AlbumMap })));
const AlbumRecordList = lazy(() => import('@/pages/album').then((module) => ({ default: module.AlbumRecordList })));

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: '/',
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'user',
        element: <User></User>,
        children: [
          {
            index: true,
            element: <UserInfo></UserInfo>,
          },
          { path: 'make-group', element: <FamilyForm></FamilyForm> },
          { path: 'login', element: <Login></Login> },
          { path: 'sign-up', element: <Signup></Signup> },
        ],
      },
      { path: 'kids', element: <KidsInformation></KidsInformation> },
      {
        path: 'plan',
        element: <Plan></Plan>,
        children: [
          {
            index: true,
            element: <SelectGroup></SelectGroup>,
          },
          {
            path: 'find-city',
            element: <FindCity></FindCity>,
          },
          {
            path: 'place-cart',
            element: <PlaceCart></PlaceCart>,
          },
          {
            path: 'select-date',
            element: <SelectDate></SelectDate>,
          },
          {
            path: 'select-place',
            element: <SelectPlace></SelectPlace>,
          },
        ],
      },
      {
        path: 'record',
        element: <Record></Record>,
        children: [
          {
            index: true,
            element: <RecordMap></RecordMap>,
          },
        ],
      },
      {
        path: 'album',
        element: <Album></Album>,
        children: [
          {
            index: true,
            element: <AlbumList></AlbumList>,
          },
          {
            path: 'map',
            element: <AlbumMap></AlbumMap>,
          },
          {
            path: 'view',
            element: <AlbumRecordList></AlbumRecordList>,
          },
        ],
      },
    ],
  },
]);

export default router;
