const { disconnect, connect } = require('./src/db/connect');
const mongoose = require('mongoose');
const moment = require('moment')
const Post = require('./src/models/postModel')

const posts = [
 { 
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
},
{ 
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
},
{ 
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
},
{ 
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
},
{ 
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
},
{
title: "Elbrus" ,
description: "sjbkjsndkcjkjdc kd ck dcknw d",
date: moment().subtract(6, 'days').calendar(),
}
]


const seed = async () => {
  connect()

  await Promise.all(posts.map(el => Post.create(el)))

  disconnect();
};

seed();
