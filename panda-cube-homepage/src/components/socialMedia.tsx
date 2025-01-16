import React from 'react';
import facebook from '../assets/icons/facebook.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';
import pinterest from '../assets/icons/pinterest.png';
import twitter from '../assets/icons/twitter.png';
import youtube from '../assets/icons/youtube.png';
import tiktok from '../assets/icons/tiktok.png';

type SocialPlatformsType = {
  name: string;
  link: string;
  icon: string;
  alt: string;
}[];

const SOCIAL_MEDIA_PLATFORMS: SocialPlatformsType = [
  {
    name: 'facebook',
    link: 'http://www.facebook.com',
    icon: facebook,
    alt: 'Click here to navigate to our Facebook account',
  },
  {
    name: 'linkedin',
    link: 'http://www.linkedin.com',
    icon: linkedin,
    alt: 'Click here to navigate to our linkedin account',
  },
  {
    name: 'pinterest',
    link: 'http://www.pinterest.com',
    icon: pinterest,
    alt: 'Click here to navigate to our pinterest account',
  },
  {
    name: 'youtube',
    link: 'http://www.youtube.com',
    icon: youtube,
    alt: 'Click here to navigate to our youtube account',
  },
  {
    name: 'tiktok',
    link: 'http://www.tiktok.com',
    icon: tiktok,
    alt: 'Click here to navigate to our tiktok account',
  },
  {
    name: 'instagram',
    link: 'http://www.instagram.com',
    icon: instagram,
    alt: 'Click here to navigate to our instagram account',
  },
];

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {SOCIAL_MEDIA_PLATFORMS.map((platform) => (
        <a
          key={platform.name}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.alt}
        >
          <img src={platform.icon} alt={platform.alt} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
