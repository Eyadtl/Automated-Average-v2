



// // const youtube = "UCwiCyswBHPe50z7yGkDSDqw";
// // var durationFilter = 'long';
// var arr = [];


// // // Add an event listener to the select element to detect changes
// // document.getElementById("channelSelect").addEventListener("change", handleChannelSelect);

// const date = document.querySelector(".date")
// const pdate = document.querySelector(".publicDate")
// let ids = (call_video, call_calculateAverageViews) => {
//     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtube}&key=${api_key}&maxResults=20&order=date`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             arr = []
//             const today = new Date();
//             // const cutoffDate = new Date("2023-06-14T11:18:56Z");
//             // console.log(data)
//             for (var i = 0; i < data.items.length; i++) {
//                 // arr.push(data.items[i].id.videoId)
//                 if (data.items[i].snippet.publishedAt > today.getFullYear() + "-" + 0 + today.getMonth() + "-" + today.getDay()  /*>pdate.value*/ + "T11:18:56Z") {
//                     arr.push(data.items[i].id.videoId)
//                 }
//             }
//             // console.log(arr)
//             return arr;
//         });

//     call_calculateAverageViews();
//     call_video();
// };

// date.addEventListener('click', () => {

//     ids(handleChannelSelect())

// })




// var last_arr = []
// // const press = document.querySelector("button");


// let video = (arr) => {
//     let fetchVideoData = (video_id, index) => {
//         fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&statistics&id=${video_id}&key=${api_key}`)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 const videoDuration = data.items[0].contentDetails.duration;
//                 const durationInMilliseconds = parseYouTubeDurationToMilliseconds(videoDuration);
//                 // console.log(data);
//                 // data.items[0].contentDetails.duration < "P59M" ||
//                 if (durationInMilliseconds > 90000 && durationInMilliseconds < 3600000) {
//                     last_arr.push(data.items[0].id)
//                 }
//                 return last_arr;
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
//     for (let J = 0; J < arr.length; J++) {
//         let video_id = arr[J];
//         fetchVideoData(video_id, J);
//     }
// };

// setTimeout(() => {
//     video(arr)
// }, 10000);
// const getId = document.querySelector(".GetId")

// pdate.addEventListener("click", () => {
//     video(arr)
// })




// avg.addEventListener("click", () => {
//     const fetchVideoData = async (video_id) => {
//         try {
//             const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${api_key}`);
//             const data = await response.json();
//             const views_f = parseInt(data.items[0].statistics.viewCount);
//             return views_f;
//         } catch (error) {
//             console.error(error);
//             return 0;
//         }
//     };
//     const calculateAverageViews = async (videoIds) => {
//         let totalViews = 0;

//         const existingAverage = document.querySelector("h1");
//         if (existingAverage) {
//             existingAverage.remove();
//         }
//         const average = document.createElement("h1")
//         for (let i = 0; i < videoIds.length; i++) {
//             const video_id = videoIds[i];
//             const views = await fetchVideoData(video_id);
//             totalViews += views;
//         }

//         const averageViews = totalViews / videoIds.length;
//         document.body.appendChild(average);
//         average.innerHTML = Math.round(averageViews);
//     };

//     calculateAverageViews(last_arr);
// });


// var arr = []

// const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=20&key=${api_key}`;

// let pageToken = '';
// let i = 0;

// let first = () => {
//     (async () => {
//         while (i != 1) {
//             i++
//             let pageUrl = URL;
//             // if (pageToken !== '') {
//             //     pageUrl += `&pageToken=${pageToken}`;
//             // }

//             const response = await fetch(pageUrl);
//             const data = await response.json();
//             // console.log(data.items);
//             arr.push(data)
//             if ('nextPageToken' in data) {
//                 pageToken = data.nextPageToken;
//             } else {
//                 break;
//             }
//             const today = new Date();
//             today.setMonth(today.getMonth() - 1)
//             var dateString = today.getFullYear() + "-" + "0" + (today.getMonth() + 1) + "-" + today.getDate() + "T00:00:00Z";
//             // const arr = [];
//             console.log(data)
//             // console.log(dateString)
//             // for (var i = 0; i <= 20; i++) {
//             //     if (data.items[i].snippet.publishedAt > "2023-07-01T11:18:56Z"/*today.getFullYear() + "-" + 0 + today.getMonth() + "-" + today.getDay() + "T11:18:56Z"*/) {
//             //         arr.push(data.items[i].id.videoId);
//             //         console.log(data.items[i].snippet.title + data.items[i].id.videoId)

//             //     }
//             // }
//         }

//     })();
// }


// const test = document.querySelector(".date")
// test.addEventListener("click", () => {
//     first()
// })

// const test1 = document.querySelector(".publicDate")
// test1.addEventListener('click', () => {
//     console.log(arr)
// })


// let test = (video_id, index) => {
//     fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&statistics&id=${video_id}&key=${api_key}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data)
//         })
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////]
const api_key = "AIzaSyAdHUHi4xwh9WQXOW5PyeoRtOAIkaqh-AY";
const avg = document.querySelector(".avg");
const CHANNEL_ID = 'UCu-j_Dytl2Fc1m1dr6pbrEA';
const PLAYLIST_ID = 'UU' + CHANNEL_ID.slice(2);

function handleChannelSelect() {
    const selectElement = document.getElementById("channelSelect");
    const selectedChannelID = selectElement.value;
    PLAYLIST = selectedChannelID; // Update youtube variable with the selected channel ID
}





function parseYouTubeDurationToMilliseconds(duration) {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    const hours = parseInt(matches[1] || 0);
    const minutes = parseInt(matches[2] || 0);
    const seconds = parseInt(matches[3] || 0);

    const totalMilliseconds = hours * 3600000 + minutes * 60000 + seconds * 1000;
    return totalMilliseconds;
}







var PLAYLIST = "UUu-j_Dytl2Fc1m1dr6pbrEA"
let ids = () => {
    return new Promise((resolve, reject) => {
        // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId={PLAYLIST_ID}&maxResults=50&key={API_KEY}'
        // https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtube}&key=${api_key}&maxResults=15&order=date
        resolve(fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST}&maxResults=50&key=${api_key}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                var arr = [];
                // const today = new Date();
                // today.setMonth(today.getMonth() - 1)
                // var dateString = today.getFullYear() + "-" + "0" + (today.getMonth() + 1) + "-" + today.getDate() + "T00:00:00Z";
                // console.log(data)
                // console.log(dateString)
                const today = new Date();
                today.setMonth(today.getMonth() - 1);

                const dateString = today.toISOString(); // This gives you the formatted date string
                // console.log(dateString)

                // "2023-07-01T11:18:56Z"
                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].snippet.publishedAt > dateString /*"2023-07-08T00:00:00Z"/*today.getFullYear() + "-" + 0 + today.getMonth() + "-" + today.getDay()*/) {
                        arr.push(data.items[i].snippet.resourceId.videoId);
                        // console.log(data.items[i].snippet.title + data.items[i].snippet.resourceId.videoId)

                    }
                }

                // console.log(arr);
                return arr; // Return the array of video IDs to continue the promise chain.
            })
            .then(videoIds => {
                // Now we can call the video function to filter video IDs based on duration.
                // console.log(videoIds)
                return video(videoIds);
            })
        )
    });
}

// const best = document.querySelector(".test")
// best.addEventListener("click", () => {
//     console.log(arr)
// })

// // ids(handleChannelSelect())

const fetchVideoData = (video_id) => {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&statistics&id=${video_id}&key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const videoDuration = data.items[0].contentDetails.duration;
            const durationInMilliseconds = parseYouTubeDurationToMilliseconds(videoDuration);
            if (durationInMilliseconds > 90000 && durationInMilliseconds < 3600000) {
                return data.items[0].id;
            }
            return null;
        })
        .catch(error => {
            console.error(error);
            return null;
        });
};

const video = (arr) => {
    return Promise.all(arr.map(fetchVideoData))
        .then(videoIds => {
            const filteredVideoIds = videoIds.filter(videoId => videoId !== null);
            // console.log(filteredVideoIds);
            return filteredVideoIds;
        });
};

// Assuming parseYouTubeDurationToMilliseconds function is defined and works correctly.

// Assuming handleChannelSelect() returns an array of video IDs.



avg.addEventListener("click", () => {
    ids(handleChannelSelect())
        .then(data => video(data))
        .then(filteredVideoIds => {
            const fetchVideoData = async (video_id) => {
                try {
                    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${api_key}`);
                    const data = await response.json();
                    const views_f = parseInt(data.items[0].statistics.viewCount);
                    return views_f;
                } catch (error) {
                    console.error(error);
                    return 0;
                }
            };
            const calculateAverageViews = async (videoIds) => {
                let totalViews = 0;
                const existingAverage = document.querySelector("h1");
                if (existingAverage) {
                    existingAverage.remove();
                }
                const average = document.createElement("h1")
                for (let i = 0; i < videoIds.length; i++) {
                    const video_id = videoIds[i];
                    const views = await fetchVideoData(video_id);
                    totalViews += views;
                }

                const averageViews = totalViews / videoIds.length;
                document.body.appendChild(average);
                average.innerHTML = Math.round(averageViews);
            };

            calculateAverageViews(filteredVideoIds);
            // console.log(filteredVideoIds)
            // The filteredVideoIds will contain the result from the video function.
            // You can now use the filteredVideoIds array here or perform further actions.
        })
        .catch(error => {
            console.error(error);
        });

})

// avg.addEventListener("click", () => {
//     const fetchVideoData = async (video_id) => {
//         try {
//             const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${api_key}`);
//             const data = await response.json();
//             const views_f = parseInt(data.items[0].statistics.viewCount);
//             return views_f;
//         } catch (error) {
//             console.error(error);
//             return 0;
//         }
//     };
//     const calculateAverageViews = async (videoIds) => {
//         let totalViews = 0;

//         const existingAverage = document.querySelector("h1");
//         if (existingAverage) {
//             existingAverage.remove();
//         }
//         const average = document.createElement("h1")
//         for (let i = 0; i < videoIds.length; i++) {
//             const video_id = videoIds[i];
//             const views = await fetchVideoData(video_id);
//             totalViews += views;
//         }

//         const averageViews = totalViews / videoIds.length;
//         document.body.appendChild(average);
//         average.innerHTML = Math.round(averageViews);
//     };

//     calculateAverageViews(filteredVideoIds);
// });
