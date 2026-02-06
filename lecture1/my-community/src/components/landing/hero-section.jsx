import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';

/**
 * HeroSection 컴포넌트
 * 커뮤니티 소개 히어로 배너
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)',
        color: '#fff',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
          }}
        >
          취미를 나누고, 함께 성장하세요
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.25rem' },
            mb: 4,
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          요리, 독서, 운동, 코딩 등 다양한 관심사를 가진 사람들이 모여
          이야기를 나누는 커뮤니티입니다.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<EditNoteIcon />}
          sx={{
            backgroundColor: 'secondary.main',
            color: '#fff',
            fontWeight: 600,
            px: 4,
            py: 1.5,
            fontSize: { xs: '0.9rem', md: '1rem' },
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
          }}
        >
          글 작성하기
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
