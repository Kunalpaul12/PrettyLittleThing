import React, {useState} from 'react';
import {Image} from 'react-native';

type Props = {
  imageUrl: string;
  imageStyle: any;
  staticImage: any;
};

const _Image: React.FC<Props> = ({imageUrl, imageStyle, staticImage}) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Image
      style={imageStyle}
      source={loading ? staticImage : {uri: imageUrl}}
      onLoadEnd={() => setLoading(false)}
    />
  );
};

export default _Image;
