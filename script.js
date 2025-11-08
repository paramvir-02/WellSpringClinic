document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    bmiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const height = parseFloat(document.getElementById('height').value) / 100;
      const weight = parseFloat(document.getElementById('weight').value);
      const result = document.getElementById('bmiResult');
      if (!height || !weight || height <= 0 || weight <= 0) {
        result.textContent = 'Please enter valid height and weight.';
        result.style.color = 'red';
        return;
      }
      const bmi = (weight / (height * height)).toFixed(2);
      let category;
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      result.textContent = `Your BMI is ${bmi} (${category})`;
      result.style.color = bmi < 25 ? 'green' : 'orange';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      alert('Thank you, your message has been sent!');
      contactForm.reset();
    });
  }
});