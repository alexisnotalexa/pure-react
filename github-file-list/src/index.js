import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time';
import moment from 'moment';
import './index.css';

const testFiles = [ 
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00", 
    latestCommit: {
      message: 'Initial commit' 
    }
  }, 
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00", 
    latestCommit: {
      message: 'Initial commit' 
    }
  }, 
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00", 
    latestCommit: {
      message: 'Added a readme' 
    }
  }, 
];

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }

  return (
    <td className="file-cion">
      <i className={`fa ${icon}`} />
    </td>
  );
}

function FileName({ file }) {
  return (
    <React.Fragment>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </React.Fragment>
  )
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
    {commit.message}
  </td>
);
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

ReactDOM.render(
  <FileList files={testFiles} />, 
  document.getElementById('root')
);
