export interface Video{
   clipId:number;
   clipName:string;
   clipURL:string;
    clipThumb:string;
    faved:boolean;
    claimed:boolean;
    siteName:string;
    marGroup:string;
    clipDate:Date;
    clipTitle:string;
    marSessionID:number;
    tags:string;
}
// export function generate(number: number): Video[] {
//   let videos: Video[] = [];
//   for (let i = 0; i < number; i++) {
//     const imgUrl = `http://content.myactionreplay.com/replay712401.00128.1679893061.mp4.jpg`;
//     videos = [
//       ...videos,
//       { link:"http://content.myactionreplay.com/replay712401.00128.1679893061.mp4", thumbnails: imgUrl, id:randomString(13) },
//     ];
//   }
//   return videos;
// }
export const randomString = (length: number): string => {
  const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  return Array(length)
    .join()
    .split(',')
    .map(() => s.charAt(Math.floor(Math.random() * s.length)))
    .join('');
};
