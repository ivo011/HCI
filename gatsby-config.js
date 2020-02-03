module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    navItems : [
      {
        text : "HOME",
        link : "/"
      },
      {
        text : "NEWS",
        link : "/news"
      },
      {
        text : "STORE",
        link : "/store"
      },
      {
        text : "CART",
        link : "/cart"
      },
      {
        text : "BLOG",
        link : "/blog"
      },
    ],
    author: `@gatsbyjs`,
  },
  // IDUCA TRI BLOKA SLUZE MENI ZA KORISTENJE YAML FILEOVA
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./pagedata/homedata/`,
      },
  // 14.1.2019 ovo je nadodan za novi yaml file 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./pagedata/storedata/`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node, object, isArray }) => object.key,
      },
    },
  // OVO SAN JA NADODA ZA MDX NEWSPOSTOVE
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "newspost",
        path: `${__dirname}/content/newspost/`,
      }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "newspost",
          path: `${__dirname}/content/blogpost/`,
        }
      },
  // OVO JE CAGLJEV MD FILE
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
  // OVO JE POTREBNO ZA UCITANJE SLIKA TJ DODAJE SE PATH CONTENT U KOJEM SE NALAZE SLIKE
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `content`, 
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

// UKLONIA SAM STA MISLIM DA JE NEPOTREBNO ODI BILO - 16.1.2020
// AKO SE POJAVE NEKE GRESKE USPOREDIT OVI FILE S FILEOM HCI_14_01_Search. 