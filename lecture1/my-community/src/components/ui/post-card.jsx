import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

/**
 * PostCard 컴포넌트
 * 개별 게시글 카드
 *
 * Props:
 * @param {string} title - 게시글 제목 [Required]
 * @param {string} author - 작성자 이름 [Required]
 * @param {string} date - 작성 날짜 [Required]
 * @param {string} preview - 미리보기 텍스트 [Required]
 * @param {string} category - 카테고리 이름 [Required]
 *
 * Example usage:
 * <PostCard
 *   title="오늘의 요리"
 *   author="홍길동"
 *   date="2026-02-05"
 *   preview="오늘은 파스타를 만들어 보았습니다."
 *   category="요리"
 * />
 */
function PostCard({ title, author, date, preview, category }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 4,
          cursor: 'pointer',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1.5 }}>
          <Chip
            label={category}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 1,
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            flexGrow: 1,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {preview}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: 'text.secondary',
            fontSize: '0.8rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PersonOutlineIcon sx={{ fontSize: '1rem' }} />
            <Typography variant="caption">{author}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: '0.85rem' }} />
            <Typography variant="caption">{date}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostCard;
