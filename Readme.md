


# parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorith - writtern in c++
- caching - Faster Builds
- Image Optimazation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - Suppport older Browsers
- HTTPs
- Tree Shaking - remove unused code
- Different build for Dev & prod

App.js file

/////

const parent = React.createElement("div",{id:"parent"} ,
    [React.createElement("div" ,{id:"child"},
        [React.createElement("h1",{},"I am a h1 tag"),
         React.createElement("h2",{},"I am a h2 tag")
        ]) , 
    React.createElement("div" ,{id:"child2"},
        [React.createElement("h1",{},"I am a h1 tag"),
         React.createElement("h2",{},"I am a h2 tag")
        ])
        ]

    );




const heading = React.createElement("h1", {id:"heading"} ,"Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/////

