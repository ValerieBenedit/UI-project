import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="auto-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">About The Team</h1>
        
        <p className="text-left mb-10">
        Our team is dedicated to creating a prototype for a wedding website maker 
        that aims to revolutionize the wedding industry by offering much-needed 
        customization options. As more young couples embark on their journey of marriage, 
        they seek interactive and inclusive experiences that reflect their unique love stories. 
         By leveraging innovative design and user-friendly features, our platform will empower couples
         to create personalized wedding websites that not only capture their vision but also engage 
         their guests in meaningful ways. We believe that this approach will not only enhance the wedding
         planning process but also foster a deeper connection between couples and their loved ones.
        </p>

        <div className="mt-4 flex flex-col space-y-4 items-center">
          {/* Jessica De-Paz */}
          <div className="text-left">
            <Image
              src="/images/headshots/JessicaHeadshot.JPG"
              alt="Jessica De-Paz"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Jessica De-Paz</h2>
            <p className="text-left">Jessica De-Paz is a Senior pursuing a Bachelor of Arts in Computer Science at Florida International University, with a primary focus on Software and Web Development. Specializing in the intersection of Human-Computer Interaction, leveraging these principles to enhance development processes to create seamless and functional user experiences.
            </p>
          </div>

          {/* Kristian Correa */}
          <div className="text-left">
            <Image
              src="/images/headshots/KristianHeadshot.jpg"
              alt="Kristian Correa"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Kristian Correa</h2>
            <p className="text-left">Laborum laboris cillum reprehenderit ex Lorem in fugiat culpa consectetur mollit nulla. Sunt deserunt sint deserunt enim ullamco ad elit nisi. Officia laborum cillum et duis nostrud proident qui excepteur officia aliqua nostrud. Irure laborum proident aute officia anim. Eu sit dolor aliquip adipisicing ut ex veniam laborum enim duis mollit dolore deserunt. Amet sint fugiat do laborum sint reprehenderit. Ullamco adipisicing incididunt adipisicing ad laboris incididunt aliqua cupidatat sit laboris qui.</p>
          </div>

          {/* Valerie Benedit */}
          <div className="text-left">
            <Image
              src="/images/headshots/ValerieHeadshot.jpeg"
              alt="Valerie Benedit"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-4 text-xl font-semibold text-left">Valeria Benedit</h2>
            <p className="text-left">Valerie Benedit is a Junior student at Florida International University. She is a double major in Computer Science and Mathematics. Her main focus is in the area of Data Science and understanding the impact of data in everyday life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
