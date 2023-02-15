import React from 'react';
import { Redirect } from 'react-router-dom';
const Zdiscover = React.lazy(() => import('@/pages/discover'));
const ZRecommend = React.lazy(() =>
  import('../pages/discover/c-pages/recommend')
);
const ZRanking = React.lazy(() => import('../pages/discover/c-pages/ranking'));
const ZSongs = React.lazy(() => import('../pages/discover/c-pages/songs'));
const ZDjradio = React.lazy(() => import('../pages/discover/c-pages/djradio'));
const ZArtist = React.lazy(() => import('../pages/discover/c-pages/artist'));
const Zfriend = React.lazy(() => import('@/pages/friend'));

const Zmine = React.lazy(() => import('@/pages/mine'));
const ZAlbum = React.lazy(() => import('../pages/discover/c-pages/album'));
const ZPlayer = React.lazy(() => import('../pages/player'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: ZRecommend,
      },
      {
        path: '/discover/ranking',
        component: ZRanking,
      },
      {
        path: '/discover/songs',
        component: ZSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: ZDjradio,
      },
      {
        path: '/discover/artist',
        component: ZArtist,
      },
      {
        path: '/discover/album',
        component: ZAlbum,
      },
    ],
    component: Zdiscover,
  },
  {
    path: '/friend',
    component: Zfriend,
  },
  {
    path: '/mine',
    component: Zmine,
  },
  {
    path: '/player',
    component: ZPlayer,
  },
];
export default routes;
