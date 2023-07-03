import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  { 
    title:
      'Meteorologia',
    reviewCount: '',
    watchCount: '',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    aulas: 29,
    modulos: 5,
    list: [
      {
        content: 'How to reduce file pixel dimentions without loosing quality',
      },
      {
        content: 'How to make logo pixel perfects with different extension',
      },
      {
        content: 'Create vector file from restarize layer styles',
      },
      {
        content: 'Make color gradient with photoshop build-in tools',
      },
    ],
  },
  {
    title: 'Navegação',
    reviewCount: '',
    watchCount: '',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
    expanded: false,
    aulas: 23,
    modulos: 5,
    list: [
      {
        content: 'How to reduce file pixel dimentions without loosing quality',
      },
      {
        content: 'How to make logo pixel perfects with different extension',
      },
      {
        content: 'Create vector file from restarize layer styles',
      },
      {
        content: 'Make color gradient with photoshop build-in tools',
      },
    ],
  },
  {
    title: 'Conhecimentos técnicos',
    reviewCount: '',
    watchCount: '',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    aulas: 20,
    modulos: 5,
    list: [
      {
        content: 'How to reduce file pixel dimentions without loosing quality',
      },
      {
        content: 'How to make logo pixel perfects with different extension',
      },
      {
        content: 'Create vector file from restarize layer styles',
      },
      {
        content: 'Make color gradient with photoshop build-in tools',
      },
    ],
  },
  {
    title: 'Regulamentos de Tráfego Aéreo',
    reviewCount: '',
    watchCount: '',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    aulas: 26,
    modulos: 5,
    list: [
      {
        content: 'How to reduce file pixel dimentions without loosing quality',
      },
      {
        content: 'How to make logo pixel perfects with different extension',
      },
      {
        content: 'Create vector file from restarize layer styles',
      },
      {
        content: 'Make color gradient with photoshop build-in tools',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="UM SPOILER"
          heading="Módulos populares"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
              aulas={course.aulas}
              modulos={course.modulos}
            />
          </Box>  
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
