function sendEmail() {
  link = 'https://wa.me/919319316155?text='
  const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const contactNo = document.getElementById('contactNo').value;
    const med = document.getElementById('med').value;
    const qus = document.getElementById('qus').value;
    const address = document.getElementById('address').value;
    const msg = `Name: ${name ? name : '-'} \n Email: ${email ? email : '-'} \n Phone No: ${contactNo ? contactNo : '-'} \n address: ${address ? address : '-'} \n medical condition: ${med ? med : '-'} \n qus: ${qus ? qus : '-'}`;
    link += msg;
    window.location.href = link;
  }
