import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/home';
import Plan, { PlanForm, FindCity, PlaceCart, SelectDate, SelectGroup, SelectPlace } from '@/pages/plan';
import Record from '@/pages/record';
import Album, { AlbumList, AlbumMap, AlbumRecordList } from '@/pages/album';
import User from '@/pages/user';

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
        path: 'plan',
        element: <Plan></Plan>,
        children: [
          {
            index: true,
            element: <PlanForm></PlanForm>,
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
            path: 'select-group',
            element: <SelectGroup></SelectGroup>,
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
      {
        path: 'user',
        element: <User></User>,
      },
    ],
  },
]);

export default router;
