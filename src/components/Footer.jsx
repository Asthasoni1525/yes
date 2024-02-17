import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/GitHub';
// import logo from './logo.svg'; // Import your logo image

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Products</Typography>
            <Link href="#">OneHash CRM</Link>
            <Link href="#">OneHash Chat</Link>
            <Link href="#">OneHash ERP</Link>
            <Link href="#">OneHash Cal</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Pricing</Typography>
            <Link href="#">Plans</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Resources</Typography>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Career</Link>
            <Link href="#">Tutorials</Link>
            <Link href="#">Brand Kit</Link>
            <Link href="#">Roadmap</Link>
            <Link href="#">Watch/Book Demo</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Legal Section</Typography>
            <Link href="#">Term of Services</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">GDPR</Link>
            <Link href="#">Investors Relation</Link>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: '1rem' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Get Help</Typography>
            <Link href="#">Chat Support</Link>
            <Link href="#">Email Sales</Link>
            <Link href="#">Email Support</Link>
            <Link href="#">Help Docs</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact</Typography>
            <Link href="#">Escalation Process</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Display your logo */}
            {/* <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
              <a href="link_to_facebook" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ cursor: 'pointer' }} />
              </a>
              <a href="link_to_x" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <XIcon style={{ cursor: 'pointer' }} />
              </a>
              <a href="link_to_linkedin" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ cursor: 'pointer' }} />
              </a>
              <a href="link_to_youtube" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <YouTubeIcon style={{ cursor: 'pointer' }} />
              </a>
              <a href="link_to_instagram" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ cursor: 'pointer' }} />
              </a>
              <a href="link_to_github" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ cursor: 'pointer' }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
