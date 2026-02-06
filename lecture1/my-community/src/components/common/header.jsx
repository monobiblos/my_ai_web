import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';

/**
 * Header 컴포넌트
 * 커뮤니티 네비게이션 헤더
 *
 * Props: 없음
 *
 * Example usage:
 * <Header />
 */
function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GroupsIcon sx={{ color: 'primary.main' }} />
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            My Community
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="primary">
            로그인
          </Button>
          <Button variant="contained" color="primary">
            회원가입
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
