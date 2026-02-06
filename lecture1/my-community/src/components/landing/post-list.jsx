import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PostCard from '../ui/post-card.jsx';

const samplePosts = [
  {
    id: 1,
    title: '주말에 만든 크림 파스타 레시피 공유합니다',
    author: '요리왕',
    date: '2026-02-06',
    preview: '간단한 재료로 만들 수 있는 크림 파스타 레시피를 공유합니다. 생크림 대신 우유를 사용해서 더 가볍게 즐길 수 있어요.',
    category: '요리',
  },
  {
    id: 2,
    title: '이번 달 독서 모임 후기',
    author: '책벌레',
    date: '2026-02-05',
    preview: '이번 달에는 "불편한 편의점"을 함께 읽었습니다. 따뜻한 이야기에 모두 감동받았어요. 다음 모임 추천 도서도 정했습니다.',
    category: '독서',
  },
  {
    id: 3,
    title: '초보자를 위한 러닝 시작 가이드',
    author: '달리기매니아',
    date: '2026-02-04',
    preview: '러닝을 처음 시작하시는 분들을 위한 가이드입니다. 준비물, 스트레칭 방법, 첫 주 운동 계획까지 정리해봤어요.',
    category: '운동',
  },
  {
    id: 4,
    title: 'React 프로젝트 포트폴리오 만들기',
    author: '코딩러버',
    date: '2026-02-03',
    preview: 'React와 MUI를 활용해서 포트폴리오 사이트를 만들어 보았습니다. 배포까지의 과정을 단계별로 공유합니다.',
    category: '코딩',
  },
  {
    id: 5,
    title: '제주도 2박 3일 여행 코스 추천',
    author: '여행자',
    date: '2026-02-02',
    preview: '겨울 제주도의 매력을 느낄 수 있는 코스를 추천합니다. 한라산 등반부터 로컬 맛집까지 알차게 다녀왔어요.',
    category: '여행',
  },
  {
    id: 6,
    title: '집에서 키우기 좋은 반려식물 추천',
    author: '초록이',
    date: '2026-02-01',
    preview: '실내에서 키우기 쉬운 반려식물 5가지를 소개합니다. 물 주기 주기와 햇빛 조건까지 꼼꼼하게 정리했어요.',
    category: '취미',
  },
];

/**
 * PostList 컴포넌트
 * 게시글 카드 목록을 Grid 레이아웃으로 표시
 *
 * Props: 없음
 *
 * Example usage:
 * <PostList />
 */
function PostList() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
          }}
        >
          최근 게시글
        </Typography>
        <Grid container spacing={3}>
          {samplePosts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PostCard
                title={post.title}
                author={post.author}
                date={post.date}
                preview={post.preview}
                category={post.category}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PostList;
