import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// Placeholder CropCloud to render in case endpoints do not get finished in time
import { placeholderCloud } from './data';
import { apiAuthGet } from '../../../api';

export default function CropCloud() {
  // Sets our baseurl to the API from DS to generate the base64 encoded crop cloud
  const baseURL = process.env.WORD_CLOUD_URL;
  const [cloudImg, setCloudImg] = useState(null);

  // Placeholder API Call to get the CropCloud once the endpoint is working
  useEffect(() => {
    const getCropCloud = () => {
      apiAuthGet(baseURL)
        .then(res => {
          setCloudImg(res.data);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    getCropCloud();
  }, [baseURL]);

  return (
    <div className="cropcloud">
      {/* The first portion of the "src" code is a built in method for decoding images, just change the file type for different img types */}
      <img
        className={'cropcloudimage'}
        src={`data:image/png;base64, ${placeholderCloud.data}`}
      />
    </div>
  );
}
