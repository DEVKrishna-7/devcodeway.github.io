const profiles = [
            { name: "John Doe", bio: "Web Developer with 5 years of experience in creating responsive websites.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Jane Smith", bio: "UX Designer passionate about creating intuitive user interfaces.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Mike Johnson", bio: "Full-stack developer specializing in Node.js and React.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Emily Brown", bio: "Digital Marketing Specialist with expertise in SEO and content strategy.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "David Lee", bio: "Mobile App Developer focusing on iOS and Android platforms.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Sarah Wilson", bio: "Project Manager with a track record of delivering successful IT projects.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Chris Taylor", bio: "Data Scientist specializing in machine learning and AI applications.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Lisa Anderson", bio: "Graphic Designer with a keen eye for branding and visual communication.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Tom Harris", bio: "DevOps Engineer experienced in cloud infrastructure and automation.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Emma Clark", bio: "Content Writer specializing in technical documentation and blog posts.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Alex Rodriguez", bio: "Cybersecurity Analyst focused on protecting digital assets and data.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Olivia White", bio: "UI Designer with a passion for creating beautiful and functional interfaces.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Ryan Murphy", bio: "Backend Developer specializing in scalable and efficient server-side solutions.", image: "https://source.unsplash.com/random/250x200?portrait,man" },
            { name: "Sophia Lee", bio: "Product Manager with experience in agile methodologies and user-centric design.", image: "https://source.unsplash.com/random/250x200?portrait,woman" },
            { name: "Daniel Kim", bio: "QA Engineer ensuring high-quality software through rigorous testing processes.", image: "https://source.unsplash.com/random/250x200?portrait,man" }
        ];

        const profilesGrid = document.getElementById('profiles-grid');

        function createProfileCard(profile) {
            const card = document.createElement('div');
            card.className = 'profile-card';
            card.innerHTML = `
                <img src="${profile.image}" alt="${profile.name}" class="profile-image">
                <div class="profile-info">
                    <h2>${profile.name}</h2>
                    <p>${profile.bio}</p>
                    <a href="#" class="profile-link" aria-label="Learn more about ${profile.name}">Learn More</a>
                </div>
            `;
            return card;
        }

        function displayAllProfiles() {
            const fragment = document.createDocumentFragment();
            
            profiles.forEach(profile => {
                const card = createProfileCard(profile);
                fragment.appendChild(card);
            });

            profilesGrid.appendChild(fragment);
        }

        // Display all profiles on page load
        displayAllProfiles();
