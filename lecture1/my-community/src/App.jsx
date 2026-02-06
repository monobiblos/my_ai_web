import Box from '@mui/material/Box';
import Header from './components/common/header.jsx';
import HeroSection from './components/landing/hero-section.jsx';
import PostList from './components/landing/post-list.jsx';
import './App.css';

/**
 * App 컴포넌트
 * 커뮤니티 메인 페이지 레이아웃
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
      }}
    >
      <Header />
      <HeroSection />
      <PostList />
    </Box>
  );
}

export default App;
