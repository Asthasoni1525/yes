import React from 'react';
import { styled, useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useData } from './DataContext';

const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const Contact = () => {
  const theme = useTheme();
  const { updateFormData } = useData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      companyName: e.target.elements.companyName.value,
      phoneNumber: e.target.elements.phoneNumber.value,
      comments: e.target.elements.comments.value,
    };
    updateFormData(formData);
  };
  return (
    <div>
      <div style={{
        backgroundImage: 'url("https://cdn.dribbble.com/users/767222/screenshots/2149436/mail-animation.gif")', // Replace with your actual background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        height: '400px',
        margin: '5%', 
        padding: '20px',
        color: 'black',
        fontSize: '3em',
        fontWeight: 'bold',
      }}>
        <h3>Unlock Business Growth:</h3>
        <h3>Consult with Our Expert Team</h3>
      </div>

      <style jsx>{`@media only screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    div {
      height: auto;
      margin: 2%;
      padding: 10px;
      fontSize: 2em;
    }
  }`}</style>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', marginLeft:'' }}>
        <FormContainer theme={theme}>
          <form onSubmit={handleSubmit}> 
            <TextField
              label="Full Name"
              type="text"
              fullWidth
              margin="normal"
              variant="outlined"
              name="fullName"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              name="email"
            />
            <TextField
              label="Company Name"
              type="text"
              fullWidth
              margin="normal"
              variant="outlined"
              name="companyName"
            />
            <TextField
              label="Phone number"
              type="number"
              fullWidth
              margin="normal"
              variant="outlined"
              name="phoneNumber"
            />
            <TextField
              label="Question/comments"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              variant="outlined"
              name="comments"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </FormContainer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card text-dark bg-light mb-3" style={{ maxWidth: '20rem', marginRight: '20px' }}>
          <div className="card-body">
            <h4 className="card-title">For Sales</h4>
            <p className="card-text">Do you wish to be part of our tribe</p>
            <div className="card-header"><h5><a target='blank' href='777@gmail.com' style={{ textDecoration: 'none', color: 'black' }}>Email Sales</a></h5></div>
          </div>
        </div>
        <div className="card text-dark bg-light mb-3" style={{ maxWidth: '20rem' }}>
          <div className="card-body">
            <h4 className="card-title">General</h4>
            <p className="card-text">can't find what you are looking</p>
            <div className="card-header"><h5><a target='blank' href='+91 12345678' style={{ textDecoration: 'none', color: 'black' }}>Say Hello</a></h5></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '8%', justifyContent: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>SawIndia offices around the globe.</h1>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', flexWrap: 'wrap' }}>
  {/* Card 1 */}
  <div className="card text-dark bg-light mb-3" style={{ maxWidth: '20rem', marginRight: '20px', marginBottom: '20px' }}>
    <div className="card-body">
      <h4 className="card-title">Indore</h4>
      <p className="card-text">India</p>
      <h5 className="card-text">corporate office</h5>
      <p>Garuda-BHIVE / OneHash</p>
      <p> BMTC Complex, BTM Layout</p>
      <p>Kuvempu Nagar, Stage 2</p>
      <p>Bengaluru - 560068</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card text-dark bg-light mb-3" style={{ maxWidth: '20rem', marginRight: '20px', marginBottom: '20px' }}>
    <div className="card-body">
      <h4 className="card-title">Bengluru</h4>
      <p className="card-text">India</p>
      <h5 className="card-text">corporate office</h5>
      <p>Garuda-BHIVE / OneHash</p>
      <p> BMTC Complex, BTM Layout</p>
      <p>Kuvempu Nagar, Stage 2</p>
      <p>Bengaluru - 560068</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card text-dark bg-light mb-3" style={{ maxWidth: '20rem', marginRight: '20px', marginBottom: '20px' }}>
    <div className="card-body">
      <h4 className="card-title">Mumbai</h4>
      <p className="card-text">India</p>
      <h5 className="card-text">corporate office</h5>
      <p>Garuda-BHIVE / OneHash</p>
      <p> BMTC Complex, BTM Layout</p>
      <p>Kuvempu Nagar, Stage 2</p>
      <p>Bengaluru - 560068</p>
    </div>
  </div>
</div>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
        <img
          src="https://assets-global.website-files.com/5e53d34464688e6f5960a338/614cc204f6d9255a18b13806_cities.svg"
          alt="SawIndia Offices"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
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
      </div> */}
      <hr />
      <Footer />
    </div>
  );
};

export default Contact;