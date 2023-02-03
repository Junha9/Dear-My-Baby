import PropTypes from 'prop-types';

export const record = PropTypes.shape({
  recordId: PropTypes.number,
  dayCount: PropTypes.number,
  recordType: PropTypes.number,
  recordFile: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
});

export const records = PropTypes.arrayOf(record);
