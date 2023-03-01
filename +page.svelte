<script>
  import "../app.css";
</script>

<div
  class="p-4 sm:p-24 overflow-hidden bg-gradient-to-r from-purple-200 via-purple-500 to-purple-400 w-full background-animate"
>
  <div
    class="bg-white grid grid-cols-[1fr_0.75fr] rounded-lg overflow-hidden shadow-lg transition-all hover:-rotate-6 hover:scale-[105%] hover:shadow-2xl"
  >
    <div class="p-4 space-y-4">
      <h1 class="font-extrabold text-3xl">Annie Sun</h1>
      <p class="text-lg">
        Genius coder. Boss Bitch Biologist. Your Next Intern?
      </p>
      <div class=" flex items-center space-x-2 flex-row">
        <span class="material-symbols-outlined">school</span>
        <p>University of California Los Angeles</p>
      </div>
      <p>
        Relevant Coursework: <span class="italic text-purple-900"
          >Computer Programming, Entrepreneurship, Product Development, User
          Experience, Fundamentals of Design</span
        >
      </p>
    </div>
    <img src="annie.jpeg" alt="Annie Sun" class="h-full object-cover" />
  </div>
  <div class="p-4 flex justify-between flex-col sm:flex-row">
    <a
      href="mailto:sunannie2002@gmail.com"
      class=" text-lg text-purple-900 hover:text-purple-600 transition-colors flex items-center space-x-2"
    >
      <span class="material-symbols-outlined">email</span>
      <div>sunannie2002@gmail.com</div></a
    >

    <a
      href="tel:8473452608"
      class="text-lg text-purple-900 hover:text-purple-600 transition-colors flex items-center space-x-2"
    >
      <span class="material-symbols-outlined">phone</span>
      <div>847 - 345 - 2608</div></a
    >
    <a
      href="https://www.linkedin.com/in/annie-sun-1b2443170/"
      class="text-lg text-purple-900 hover:text-purple-600 transition-colors flex items-center space-x-2"
    >
      <span class="material-symbols-outlined">link</span>
      <div>in/anniesun</div>
    </a>
  </div>
</div>
<div class="w-full h-full relative p-8 ">
  <div
    class="-z-10 absolute from-purple-200 to-white h-6 w-full bg-gradient-to-b top-0 left-0 right-0"
  />
  <div
    class="grid grid-cols-[2fr_1fr] border-b-2 border-b-red-600 divide-gray-500 divide-x-[0.5px]"
  >
    <div>
      <h2 class="text-3xl font-bold text-purple-900 pb-8">Work Experience</h2>
      {#each [{ organization: "UCLA Healthy Campus Initiative", position: "Event Organizer", time: "May 2022 - Present", place: "Los Angeles, CA", description: `
        <ul class="list-disc">
            <li>Collaborate with different student organizations to improve student wellness around campus</li>
            <li>Design website, social media posts, event flyers and coordinate events</li>

        </ul>
        ` }, { organization: "QLSF", position: "Research Intern", time: "June - September 2022", place: "South San Francisco, CA", description: ` <ul class="list-disc">
                <li>Exposed to business administration and interpersonal skills through collaborations with different teams</li>
                <li>Conducted research on ENPP1, an anti-cancer target</li>
                </ul>` }, { organization: "Smile Burlingame", position: "Dental Assistant", time: "June - September 2021", place: "Burlingame, CA", description: ` <ul class="list-disc">
                    <li>Collaborated with insurance companies and patients to file insurance claims and organize deductible contracts</li>
                    <li>Assisted general dentist with charting and inputted patient information into the Dentrix program</li>
                    </ul>` }, { organization: "Mathnasium", position: "Lead Instructor", time: "March - September 2020", place: "Burlingame, CA", description: ` <ul class="list-disc">
                        <li>Transitioned in-person workshops to virtual classroom programs such as Radius and Zoom to avoid shutdown</li>
                        <li>Instructed groups of 5 students an hour from kindergarten to 12th grade and tailored worksheets for them</li>
                        </ul>` }, { organization: "District Office of Congresswoman Jackie Speier", position: "Congressional Intern", time: "June - August 2019", place: "San Mateo, CA", description: ` <ul class="list-disc">
                                <li></li>
                                </ul>` }] as job}
        <h3 class="text-xl font-bold">
          {job.position} @ {job.organization}
        </h3>

        <div class="text-lg flex items-center space-x-2 pt-2">
          <span class="material-symbols-outlined">schedule</span>
          <p>
            {job.time}
          </p>
        </div>
        <div class="text-lg flex items-center space-x-2 pt-2 pb-2">
          <span class="material-symbols-outlined">location_on</span>
          <p>
            {job.place}
          </p>
        </div>
        <p class="text-lg  pb-4 text-black">
          {@html job.description}
        </p>
      {/each}
    </div>
    <div class="px-8">
      <h2 class="text-3xl font-bold text-indigo-900 pb-8 text-end">Skills</h2>
      <h2 class="text-xl font-bold pb-4">Hard Skills</h2>

      {#each [{ name: "JavaScript", level: 4 }] as skill}
        <div class="flex items-center space-x-2">
          <p class="text-lg">{skill.name} |</p>

          {#each Array(skill.level) as _}
            <span class="material-symbols-outlined text-purple-700">star</span>
          {/each}
        </div>
      {/each}
      <h2 class="text-xl font-bold pt-8 pb-4">Soft Skills</h2>
      {#each [{ name: "Presentation", level: 5 }] as skill}
        <div class="flex items-center space-x-2">
          <p class="text-lg">{skill.name} |</p>

          {#each Array(skill.level) as _}
            <span class="material-symbols-outlined text-purple-700">star</span>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .background-animate {
    background-size: 400%;
    animation: gradient 15s ease infinite;
    -moz-animation: gradient 15s ease infinite;
    -webkit-animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
