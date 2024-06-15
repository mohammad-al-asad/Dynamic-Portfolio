const heroSection = require("../model/heroSection.js");
const aboutSection = require("../model/aboutSection.js");
const CvModel = require("../model/CvModel.js");
const projectSection = require("../model/projectSection.js");

async function portfolioController(req, res, next) {
  // HeroSection
  const heroObjs = await heroSection.find({});
  if (heroObjs[1]) {
    await heroSection.deleteOne({ __id: heroObjs[1].__id });
  }

  const heroObj = {
    professions: heroObjs[0].professions,
    description: heroObjs[0].description,
    hero: heroObjs[0].hero,
  };

  // AboutSection
  const aboutObjs = await aboutSection.find({});
  if (aboutObjs[1]) {
    await aboutSection.deleteOne({ __id: aboutObjs[1].__id });
  }

  const aboutObj = {
    technologies: aboutObjs[0].technologies,
    education: aboutObjs[0].education,
    skill: aboutObjs[0].skill,
    passion: aboutObjs[0].passion,
    about: aboutObjs[0].about,
  };

  // ProjectSection
  const projectObjs = await projectSection.find({});

  // CvSection
  const CvObjs = await CvModel.find({});
  if (CvObjs[1]) {
    await CvModel.deleteOne({ __id: CvObjs[1].__id });
  }

  const CvObj = {
    CV: CvObjs[0].CV,
  };

  res.json({
    heroObj: { ...heroObj },
    aboutObj: { ...aboutObj },
    CvObj: { ...CvObj },
    projectObjs: projectObjs
  });
}

module.exports = portfolioController;
