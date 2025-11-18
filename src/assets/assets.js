import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'
import john from './john.png'
import john1 from './john1.jpg'
import john2 from './john2.jpg'
import  john4 from './john4.webp'
import linkedin from './linkedin.png'
import facebook from './facebook.png'
import  bird from './bird.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon,
    linkedin,
    facebook,
     bird
}

export const testimonialsData = [
    {
        id: 1,
        text: "“I needed quick, clean images for UI mockups and client demos — website delivered perfectly. No extra editing, just upload and go. It’s now part of my daily toolkit.”",
        author: "Ravi Sharma.",
        image:john,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "“As a small business owner on Etsy, clean product images are everything. This background remover saved me hours of editing and made my listings look so much more professional.”",
        author: "Rina Mehta.",
        image:john1,
        jobTitle:'Handmade Jewelry Seller'
    },
     {
        id: 3,
        text: "“Perfect for quick client previews and thumbnails. The cutouts are sharp, and I no longer need Photoshop for simple tasks. A real time-saver in my workflow.”",
        author: "Amit Roy.",
        image:john2,
        jobTitle:'Event Photographer'
    },
     {
        id: 4,
        text: "“I’ve used many tools, but this one is by far the fastest and most accurate. It perfectly removes backgrounds and helps speed up my design process. Highly recommended!.”",
        author: "Kunal.",
        image:john4,
        jobTitle:'Freelance Graphic Designer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]