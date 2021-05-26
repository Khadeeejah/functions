exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${subject}
      
      
      {
        viewer: {
        login: "khadeeejah",
        starredRepositories: {
        totalCount: 6
        },
        following: {
        totalCount: 4
        },
        followers: {
        totalCount: 5
        },
        repositories: {
        nodes: [
        {
        name: "functions",
        url: "https://github.com/Khadeeejah/functions",
        description: null,
        updatedAt: "18 hours ago",
        isFork: false,
        stargazerCount:0 ,
        primaryLanguage: {
        name: "javascript",
        color: "#d6c803"
        }
        },
        {
        name: "githubclone",
        url: "https://github.com/Khadeeejah/githubclone",
        description: null,
        updatedAt: "23 hours ago",
        isFork: false,
        stargazerCount:0 ,
        primaryLanguage: {
        name: "html",
        color: "#f9826c;"
        }
        },
        {
        name: "drawingapp",
        url: "https://github.com/Khadeeejah/drawingapp",
        description: null,
        updatedAt: "6 days ago",
        isFork: false,
        stargazerCount: 0,
        primaryLanguage: {
        name: "javascript",
        color: "#d6c803"
        }
        },
        {
        name: "dragndrop",
        url: "https://github.com/Khadeeejah/dragndrop",
        description: null,
        updatedAt: "6 days ago",
        isFork: false,
        stargazerCount: 0,
        primaryLanguage: {
        name: "Javascript",
        color: "#d6c803"
        }
        },
        {
        name: "movieapp",
        url: "https://github.com/Khadeeejah/movieapp",
        description: null,
        updatedAt: "6 days ago",
        isFork: false,
        stargazerCount: 0,
        primaryLanguage: {
        name: "CSS",
        color: "#bd03d6;"
        }
        },
        {
        name: "clock",
        url: "https://github.com/Khadeeejah/clock",
        description: null,
        updatedAt: "6 days ago",
        isFork: false,
        stargazerCount: 0,
        primaryLanguage: {
        name: "CSS",
        color: "#bd03d6"
        }
        },
        {
        name: "offerletter",
        url: "https://github.com/Khadeeejah/offerletter",
        description: null,
        updatedAt: "2021-05-19T08:26:08Z",
        isFork: false,
        stargazerCount: 1,
        primaryLanguage: {
        name: "CSS",
        color: "#563d7c"
        }
        }
        ]
        },
        avatarUrl: "https://avatars.githubusercontent.com/u/52764879?v=4",
        bio: "null",
        email: "",
        name: "KHADEEEJAH",
        location: "Lagos, Nigeria",
        twitterUsername: "_Khadeeejah",
        websiteUrl: "null",
        organizations: {
        totalCount: 0
        }
        }
        }
      
      
      !`,
    }
  }