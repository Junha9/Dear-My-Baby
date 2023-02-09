import { Map } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import AlbumMapCluster from './AlbumMapCluster';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

const dummyRecords = [
  {
    recordId: 1,
    dayCount: 1,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/237/200/300',
    lat: 37.4967288,
    lng: 127.0448612,
  },
  {
    recordId: 2,
    dayCount: 1,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/236/300/300',
    lat: 37.4977288,
    lng: 127.0458612,
  },
  {
    recordId: 3,
    dayCount: 2,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/235/300/200',
    lat: 37.4987288,
    lng: 127.0458612,
  },
  {
    recordId: 4,
    dayCount: 2,
    recordType: 1,
    recordFile: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    lat: 37.4997288,
    lng: 127.0468612,
  },
];

export default function AlbumMap() {
  const [records] = useState(dummyRecords);
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const maxSteps = records.length;

  function handleRecordId(recordId) {
    for (let index = 0; index < records.length; index++) {
      if (records[index].recordId == recordId) {
        setActiveStep(index);
        break;
      }
    }
    setModalOpen(true);
  }

  return (
    <>
      <Map center={{ lat: 37.4977288, lng: 127.0448612 }} style={{ width: '100%', height: '90vh' }} draggable={true}>
        <AlbumMapCluster records={records} handleRecordId={handleRecordId}></AlbumMapCluster>
      </Map>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {activeStep < maxSteps ? (
            <Card sx={{ width: 400 }}>
              <CardHeader title={`${records[activeStep].dayCount}일차 기록`}></CardHeader>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>
                  <KeyboardArrowLeft></KeyboardArrowLeft>
                </Button>
                {records[activeStep].recordType == 0 ? (
                  <CardMedia
                    component="img"
                    src={records[activeStep].recordFile}
                    sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                  ></CardMedia>
                ) : (
                  <CardMedia
                    component="video"
                    controls
                    src={records[activeStep].recordFile}
                    sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                  ></CardMedia>
                )}

                <Button disabled={activeStep === maxSteps - 1} onClick={() => setActiveStep(activeStep + 1)}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                </Button>
              </Box>
              <CardContent>
                <ul>
                  <li>레코드 제목</li>
                  <li>레코드 text</li>
                  <li>recordId : {records[activeStep].recordId}</li>
                  <li>recordType : {records[activeStep].recordType}</li>
                  <li>latitude : {records[activeStep].lat}</li>
                  <li>longitude : {records[activeStep].lng}</li>
                  <textarea></textarea>
                  <button>댓글 작성</button>
                </ul>
              </CardContent>
            </Card>
          ) : (
            <div>No Content</div>
          )}
        </Box>
      </Modal>
    </>
  );
}
