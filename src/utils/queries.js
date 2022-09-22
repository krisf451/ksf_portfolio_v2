export const allProjectsQuery = `*[_type == "projects"]{
  _id,
  title,
  description,
  tags,
  projectLink,
  codeLink,
  imgUrl{
    asset->{
      _id,
      url
    }
  },
  video{
    asset->{
      _id,
      url
    }
  },
}
`;

export const allSkillsQuery = `*[_type == "skills"]{
  _id,
  name,
  link,
  icon{
    asset->{
      _id,
      url
    }
  },
}
`;

export const allExperiencesQuery = `*[_type == "workExperience"] | order(company desc){
  _id,
  company,
  title,
  desc,
  logo{
    asset->{
      _id,
      url
    }
  },
}
`;

export const allTestimonialsQuery = `*[_type == "testimonials"]{
  _id,
  name,
  company,
  feedback,
  photo{
    asset->{
      _id,
      url
    }
  },
}
`;
