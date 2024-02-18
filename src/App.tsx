import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { FullLayout } from './components/layout/FullLayout/FullLayout';
import { Path } from './type/Path';
import { LoaderSkeleton } from './components/Skeletons/LoaderSkeleton/LoaderSkeleton';

const Home = lazy(() => import('./components/Home/Home').then(module => ({default: module.Home})));
const EpisodeDetails = lazy(() => import('./components/EpisodeDetails/EpisodeDetails').then(module => ({default: module.EpisodeDetails})));
const NotFound = lazy(() => import('./components/NotFound/NotFound').then(module => ({default: module.NotFound})));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderSkeleton />}>
        <Routes>
          <Route path={Path.default} element={<FullLayout />}>
            <Route index element={<Home />} />
            <Route path={Path.episodeDetails} element={<EpisodeDetails />} />
            <Route path={Path.notFound} element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
