import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
  CYBERSECURITY_SKILL,
  NETWORKING_SKILL,
  WEBDEV_SKILL,
  DESIGN_SKILL,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 scale-90 sm:scale-95 md:scale-100"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-7xl">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-7xl">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-7xl">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-7xl">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Cybersecurity & Validation Skills */}
      <div className="w-full max-w-5xl mt-16 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Cybersecurity & Validation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CYBERSECURITY_SKILL.map((skill, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20"
            >
              <div className="mt-1">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Networking Skills */}
      <div className="w-full max-w-5xl mt-12 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Networking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NETWORKING_SKILL.map((skill, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/20"
            >
              <div className="mt-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development Skills */}
      <div className="w-full max-w-5xl mt-12 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Web Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WEBDEV_SKILL.map((skill, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20"
            >
              <div className="mt-1">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Skills */}
      <div className="w-full max-w-5xl mt-12 mb-10 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DESIGN_SKILL.map((skill, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/20"
            >
              <div className="mt-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-7xl">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
