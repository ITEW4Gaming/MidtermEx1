document.addEventListener("DOMContentLoaded", function() {
    // Retrieve query parameters
    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');

    // Populate content based on location
    const destinationImage = document.getElementById('destination-image-html');
    const destinationContent = document.getElementById('destination-content-html');

    switch (location) {
      case 'boracay':
        destinationImage.src = 'images/img-11.jpg';
        destinationContent.innerHTML = `
          <h3>Boracay</h3>
          <p>Boracay is a tropical paradise known for its stunning white sand beaches, crystal-clear waters, and vibrant nightlife. It offers a wide range of water sports and activities, from snorkeling and diving to kiteboarding and parasailing. Visitors can also explore the island's lush interior, go on boat tours, indulge in delicious seafood, or simply relax on the beach and enjoy breathtaking sunsets.</p>
          <p>Some popular tourist spots in Boracay include:</p>
          <ul>
            <li>White Beach</li>
            <li>Puka Shell Beach</li>
            <li>Bulabog Beach</li>
            <li>Mount Luho</li>
            <li>Ariel's Point</li>
          </ul>
          <p>Reviews:</p>
          <p>"Boracay is absolutely stunning! The beaches are pristine and the water is crystal clear. I had an amazing time snorkeling and exploring the island."</p>
          <p>"The nightlife in Boracay is fantastic. There are so many bars and restaurants to choose from, and the atmosphere is always lively."</p>
        `;
        break;
      case 'palawan':
        destinationImage.src = 'images/img-12.jpg';
        destinationContent.innerHTML = `
          <h3>Palawan</h3>
          <p>Palawan is renowned for its pristine beaches, crystal-clear turquoise waters, and stunning limestone cliffs. It's home to some of the world's most beautiful islands and natural attractions, including the UNESCO World Heritage-listed Puerto Princesa Underground River, El Nido's picturesque lagoons and Bacuit archipelago, and Coron's mesmerizing dive sites and shipwrecks.</p>
          <p>Must-visit places in Palawan:</p>
          <ul>
            <li>Puerto Princesa Underground River</li>
            <li>El Nido's lagoons and beaches</li>
            <li>Coron's dive sites and shipwrecks</li>
            <li>Honda Bay</li>
            <li>Tubbataha Reefs Natural Park</li>
          </ul>
          <p>Reviews:</p>
          <p>"Palawan is a paradise on earth! The beaches are breathtaking, and the underwater world is simply mesmerizing."</p>
          <p>"Exploring the underground river in Puerto Princesa was an unforgettable experience. It's truly a wonder of nature."</p>
        `;
        break;
      case 'bohol':
        destinationImage.src = 'images/img-13.jpg';
        destinationContent.innerHTML = `
          <h3>Bohol</h3>
          <p>Bohol is famous for its unique geological formations, including the Chocolate Hills, thousands of cone-shaped hills covered in green grass that turn brown during the dry season, resembling chocolate kisses. The island also boasts stunning beaches, vibrant coral reefs for diving and snorkeling, and cultural attractions like the centuries-old Baclayon Church and the adorable tarsiers, one of the world's smallest primates.</p>
          <p>Top attractions in Bohol:</p>
          <ul>
            <li>Chocolate Hills</li>
            <li>Panglao Island</li>
            <li>Loboc River Cruise</li>
            <li>Tarsier Sanctuary</li>
            <li>Alona Beach</li>
          </ul>
          <p>Reviews:</p>
          <p>"Bohol is a hidden gem in the Philippines. The Chocolate Hills are surreal, and the tarsiers are adorable!"</p>
          <p>"Loboc River Cruise was a relaxing experience, and Panglao Island offered some of the most beautiful beaches I've ever seen."</p>
        `;
        break;
      case 'siargao':
        destinationImage.src = 'images/img-14.jpg';
        destinationContent.innerHTML = `
          <h3>Siargao</h3>
          <p>Siargao is known as the surfing capital of the Philippines, attracting surfers from around the world to its legendary Cloud 9 wave. Beyond surfing, the island offers stunning natural beauty, including pristine beaches, crystal-clear lagoons, and lush coconut palm forests. Visitors can also explore nearby islands, go island-hopping, or indulge in delicious fresh seafood.</p>
          <p>Highlights of Siargao:</p>
          <ul>
            <li>Cloud 9 Surfing</li>
            <li>Sugba Lagoon</li>
            <li>Magpupungko Rock Pools</li>
            <li>Island-hopping to Naked Island, Guyam Island, and Daku Island</li>
            <li>Maasin River</li>
          </ul>
          <p>Reviews:</p>
          <p>"Siargao exceeded my expectations! The surfing at Cloud 9 was incredible, and the island-hopping tours were so much fun."</p>
          <p>"Sugba Lagoon was like paradise on earth. The water was so clear, and the scenery was breathtaking."</p>
        `;
        break;
      default:
        destinationContent.textContent = 'Location details not found.';
    }
  });