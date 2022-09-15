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
  bgColor,
  icon{
    asset->{
      _id,
      url
    }
  },
}
`;
