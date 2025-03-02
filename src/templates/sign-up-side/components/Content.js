import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AchievosLogo from '@templates/shared-theme/SitemarkIcon';

const items = [
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Join the Hall of Achievers!',
    description:
      'Unlock exclusive badges, celebrate milestones, and inspire your peers. Create your account today and start your journey to greatness!',
  }
];

export default function Content() {
  return (
    <Stack
      // sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-evenly', // Distributes items evenly
        height: '100%', // Ensures full height utilization
        minHeight: '70vh', // Ensures it stretches sufficiently
        maxWidth: 450,
        gap: 4,
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <AchievosLogo width={250} />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
