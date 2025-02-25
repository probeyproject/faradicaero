import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

const teamMembers = [
  {
    picture:
      "https://img.freepik.com/free-photo/drone-takes-off-from-hand_72229-1067.jpg?t=st=1738818277~exp=1738821877~hmac=374f37b6b3f911d4516e64529f401d3e7d53c19ee4e90824c5b5e74abf4c2d0f&w=900",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
    bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find Take a look and find the right one for you! the right one for you! Take a look and find the right one for you!",
    num: "1",
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/drone-ready-fly-off-hand_53876-148293.jpg?w=900",
    fullName: "Raima Ray",
    designation: "Business Head",
    bio: "It’s easier to reach your savings goals when you have the right savings account. Take a lookTake a look and find the right one for you! and find the right one for you! Take a look and find the right one for you!",
    num: "2",
  },
  {
    picture:
      "https://img.freepik.com/free-photo/drone-takes-off-from-hand_72229-1067.jpg?t=st=1738818277~exp=1738821877~hmac=374f37b6b3f911d4516e64529f401d3e7d53c19ee4e90824c5b5e74abf4c2d0f&w=900",
    fullName: "Arjun Kapur",
    designation: "UI Design",
    bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Take a look and find the right one for you! Take a look and find the right one for you!",
    num: "3",
  },
  {
    picture:
      "https://img.freepik.com/free-photo/man-s-hand-holding-drone-outdoors_23-2149392706.jpg?t=st=1738818682~exp=1738822282~hmac=fe05e1e3aa10846aabf7d0ab7ed76f61d869d8f84be1cde775cb23a5c2f2c07a&w=900",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
    bio: "It’s easier to reach your savings goals when you have the right savings account.Take a look and find the right one for you! Take a look and find the right one for you! Take a look and find the right one for you!Take a look and find the right one for you!",
    num: "4",
  },
];

const ProjectPage = () => {
  return (
    <>
      <div
        className="flex pt-40 h-[50vh] pb-10 bg-black justify-center mb-6 md:mb-1"
        style={{
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
        }}
      >
        <div className="sm:max-w-md text-center">
          <h2 className="text-3xl text-white font-bold leading-none md:text-[45px] mb-4">
            Our Projects
          </h2>
          <p className="text-white">
            Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam
            maiores, illum at qui.
          </p>
        </div>
      </div>

      <section className="pb-14 md:pb-24 md:px-16 lg:px-32  dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          {teamMembers.map((member, index) => (
            <div className="grid grid-cols-12 mt-12" key={index}>
              <div
                className={`col-span-12 md:col-span-5 ${
                  index % 2 === 0 ? "md:order-2 md:col-start-8" : ""
                }`}
              >
                <img
                  src={member.picture}
                  alt={member.fullName}
                  className="h-auto mx-auto w-full rounded-lg"
                />
              </div>
              <div
                className={`col-span-12 md:col-span-6 mt-4 md:mt-0 ${
                  index % 2 === 1 ? "md:col-start-7" : ""
                }`}
              >
                <div className="h-full flex flex-col justify-center">
                  <span className="  inline-block    mt-1 mr-2   rounded-full relative  border-gray-600   ">
                    {" "}
                    <h2 className="bg-red-500 w-8 text-xl px-1 font-bold rounded text-white">
                      0{member.num}
                    </h2>{" "}
                  </span>
                  <h4 className="text-2xl font-bold mb-1 text-red-500">
                    {member.fullName}
                  </h4>
                  <p className="mb-6 text-gray-500">{member.designation}</p>
                  <p className="opacity-90 mb-0 text-gray-500 font-xl font-semibold">
                    {member.bio}
                  </p>
                  <div className="mt-6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
