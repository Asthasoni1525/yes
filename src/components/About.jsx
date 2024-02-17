import React, { useEffect } from 'react';
import { useData } from './DataContext';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';

const About = () => {
  const { formData } = useData();

  // Save form data to local storage whenever formData changes
  useEffect(() => {
    if (formData) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div>      
      {formData && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(formData).map(([field, value]) => (
                <TableRow key={field}>
                  <TableCell>{field}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div style={{ overflow: 'hidden' }}>
  <p style={{ float: 'left', width: '70%' }}>
    <h2>Company Background</h2>
    <br/>
    Established in 1991, Software At Work (India) Pvt. Ltd. has always focussed on providing off-the-shelf software solutions that are designed specifically for Small-to-Mid-Enterprise (SME) and distributed enterprise markets. Since its inception, Software@Work has focused on solutions tailored specifically to the mid-market, solving the business software needs and challenges of our clients.
    A company is essentially an artificial person—also known as corporate personhood—in that it is an entity separate from the individuals who own, manage, and support its operations. Companies are generally organized to earn a profit from business activities, but some may be structured as nonprofit charities. Each country has its own hierarchy of company and corporate structures but with many similarities.

A company has many of the same legal rights and responsibilities as a person does, like the ability to enter into contracts, the right to sue (or be sued), borrow money, pay taxes, own assets, and hire employees.
  </p>
  
  <div style={{ float: 'right', width: '30%' }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEgo_--WK4mz-NKXj9bp1IEWJPsIIpB6h9g&usqp=CAU"
      alt="Company Image"
      style={{ width: '100%' }}
    />
  </div>
</div>
<hr />

     <div className='text-center p-3'>
      <h1 className='font-weight-bold'><span className='text-bold'>Some of our Clients</span></h1>
      <Carousel interval={1000} pause={false} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://yt3.googleusercontent.com/4QU7LdZ5dmW1q_GjNslfbqhZWHBlL5fbShIdk4JTY3B0VY_VlaVe_o2Bux1VbBewo5qiTAur2H0=s900-c-k-c0x00ffffff-no-rj"
            alt="First slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.lifewire.com/thmb/yx5oJUJ4fA1TQ0h0pl9FM7Kc4Fo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yahoo-logo-2019-879b7bed612d4bbc97065dce2a0f2d73.png"
            alt="Second slide"
            style={{ height: '300px', width: 'auto' }} // 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.livelaw.in/cms/wp-content/uploads/2017/08/Tatamotors-Customer-Care-Number.jpg"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} // 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncmuWMHpT_GcTGcGTBchBRRg-LJ3emnb4vUpXyj3YPp-SgybdSbXvgwEzztn5MPU92sU&usqp=CAU"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.shutterstock.com/image-vector/valencia-spain-march-29-2023-600nw-2282038799.jpg"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://yt3.googleusercontent.com/4QU7LdZ5dmW1q_GjNslfbqhZWHBlL5fbShIdk4JTY3B0VY_VlaVe_o2Bux1VbBewo5qiTAur2H0=s900-c-k-c0x00ffffff-no-rj"
            alt="First slide"
            style={{ height: '300px', width: 'auto' }} // Adjust height as needed
          />
          </Carousel.Item>
      </Carousel>
    </div>
            
<hr/>
      <Footer/>
    </div>
    
  );
};

export default About;