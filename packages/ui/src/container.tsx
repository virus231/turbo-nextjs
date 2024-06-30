import { Box, Container } from '@radix-ui/themes';

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}
    >
      <Container size="4">
        <Box style={{ background: 'red', borderRadius: 'var(--radius-3)' }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};
