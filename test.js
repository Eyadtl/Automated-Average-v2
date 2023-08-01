


const api_key = "AIzaSyBYAY_7xeW6iANNfROzgKxjovKrQYwCdCg";
// const youtube = "UCwiCyswBHPe50z7yGkDSDqw";
// var durationFilter = 'long';
var arr = [];

function handleChannelSelect() {
    const selectElement = document.getElementById("channelSelect");
    const selectedChannelID = selectElement.value;
    youtube = selectedChannelID; // Update youtube variable with the selected channel ID
}

// // Add an event listener to the select element to detect changes
// document.getElementById("channelSelect").addEventListener("change", handleChannelSelect);

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



function parseYouTubeDurationToMilliseconds(duration) {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    const hours = parseInt(matches[1] || 0);
    const minutes = parseInt(matches[2] || 0);
    const seconds = parseInt(matches[3] || 0);

    const totalMilliseconds = hours * 3600000 + minutes * 60000 + seconds * 1000;
    return totalMilliseconds;
}



var last_arr = []
// const press = document.querySelector("button");
const avg = document.querySelector(".avg");


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
const getId = document.querySelector(".GetId")

// getId.addEventListener("click", () => {
//     video(arr)
// })




// avg.addEventListener("click", () => {
//     // const fetchVideoData = async (video_id) => {
//     //     try {
//     //         const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${api_key}`);
//     //         const data = await response.json();
//     //         const views_f = parseInt(data.items[0].statistics.viewCount);
//     //         return views_f;
//     //     } catch (error) {
//     //         console.error(error);
//     //         return 0;
//     //     }
//     // };
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


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ids = () => {
    return new Promise((resolve, reject) => {
        resolve(fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtube}&key=${api_key}&maxResults=20&order=date`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const today = new Date();
                const arr = [];

                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].snippet.publishedAt > today.getFullYear() + "-" + 0 + today.getMonth() + "-" + today.getDay()) {
                        arr.push(data.items[i].id.videoId);
                    }
                }

                // console.log(arr);
                return arr; // Return the array of video IDs to continue the promise chain.
            })
            .then(videoIds => {
                // Now we can call the video function to filter video IDs based on duration.
                return video(videoIds);
            }))
    });
}

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