<script setup>
  import WhyItem from '@/components/home/WhyItem.vue';
  import CircleDot from "@/components/CircleDot.vue";
  import TestimonyItem from '@/components/home/TestimonyItem.vue';
  import TipItem from "@/components/TipItem.vue";
  
</script>
<template>
  <div class="landing-page">
    <header>
      <!-- Header content and navigation -->
    </header>
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-content">
          <h4 class="text-center text-white">
           EduConsult Education Consultancy
          </h4>
          
          <p>
            Deliverers of quality and reliable international scholarships you can trust 
          </p>
        </div>
      </div>
    </section>
    <!-- Who we are -->
    <section class="container d-flex flex-column flex-lg-row intro-section my-md-5">
      <div class="my-5 px-5">
        <h2 class="text-center pb-4 border-bottom">Who We Are</h2>
        <p class="text-center">
          EduConsult is a registered education consultancy firm that provides
          professional services to students who wish to study abroad. We are
          committed to providing the best services to our clients. We are
          dedicated to helping students achieve their dreams of studying abroad
          by providing them with the best services. 
        </p>
      </div>
      <!-- image -->
      <div class=" d-flex my-5 px-0 text-center">
        <img src="/images/image9.jpg" alt="" class="img-fluid rounded shadow" lazy/>
      </div>
    </section>

    <section class="services-section container my-md-5">
      <h2 class=" text-center border-bottom pb-4">Why Choose Us</h2>
      <article class="d-flex flex-column flex-md-row flex-nowrap mt-md-5">
        <WhyItem caption="Best Support"
          reason="We offer the best support and we are available irrespective of the time or day." />
        <WhyItem caption="Travel Assistance"
          reason="We assists you in preparing your travel documents to ease your stress" />
        <WhyItem caption="Coaching & Counselling"
          reason="We guide you to make the best decision in your academic and prospective job career!" />
      </article>
      <div class="d-flex flex-column flex-md-row flex-wrap justify-content-center">
        <TipItem desc="100% Assurance" />
        <TipItem desc="Access to over 50 universities in the USA" />
        <TipItem desc="Access to over 30 universities in Canada" />
        <TipItem desc="Quality and on demand courses" />
        <TipItem desc="Access to renowned universities" />
        <TipItem desc="Assistance in your F1 student Visa acquisition" />
        <TipItem desc="Pre Visa interview guidelines" />
        <TipItem desc="50 percent cash back guarantee" />
      </div>
    </section>

    <div class="d-flex flex-row justify-content-center my-5">
      <CircleDot />
      <CircleDot />
      <CircleDot />
    </div>
    <section>
    </section>
    <section class="testimonials-section container my-md-5">
      <h2 class="text-center py-4 border-bottom">What Our Clients Say</h2>
      <article class="d-flex flex-column flex-md-row mt-md-5">
        <!-- Testimonials -->
        <TestimonyItem image="/people/elsie1.png" name="Elsie Ansah" testimony="Failed so many times by different consults, only EduConsult was able to make my dream come to live!" />
        <TestimonyItem image="/people/ben.png" name="Benjamin Arthur" testimony="EduConsult are extremely good at what they do and I recommend them to anyone who needs assistance to study aborad" />
        <TestimonyItem image="/people/adwoa.png" name="Adwoa Frimpongmaa" testimony="EduConSult provided invaluable guidance during my application process, and their ongoing support is a tremendous asset." />
      </article>
    </section>
    <section class="contact-section my-5">
      <h2 class="text-center py-4">Find Us</h2>
      <!-- include google map of winneba -->
      <div class="map mt-md-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.065547821434!2d-0.617868685232748!3d5.351868796260799!2m3!1f0!2f39.99999863066117!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd1a0b0b0b0b0b0%3A0x1b0b0b0b0b0b0b0!2sWinneba!5e0!3m2!1sen!2sgh!4v1628175440009!5m2!1sen!2sgh"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      
    </section>
    <footer>
      <!-- Footer with same links on navbar and social links -->
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fab fa-instagram-square"></i>
            </a>
          </li>
        </ul>
      </nav>

    </footer>
  </div>
</template>
      
      
     