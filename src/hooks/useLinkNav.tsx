import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const getLinksNav = [
  { name: 'Home', href: '/', icon: <HomeIcon /> },
  { name: 'Movies', href: '/movies', icon: <MovieIcon /> },
  { name: 'Upcoming', href: '/movies/upcoming', icon: <MovieIcon /> },
  { name: 'Popular', href: '/movies/popular', icon: <MovieIcon /> },
  { name: 'TV', href: '/tv', icon: <TvIcon /> },
];

export default getLinksNav;
