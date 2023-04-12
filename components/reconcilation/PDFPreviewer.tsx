import React, { useMemo, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { DownloadFile, GetFilename } from 'app/utils/Helpers';
import SimpleLoader from './SimpleLoader';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

interface PDFPreviewerPropTypes {
  file: string | null;
}

/**
 * Render PDF in a component
 * @docs : https://www.npmjs.com/package/react-pdf
 * @param file
 * @param loading
 * @constructor
 */
function PDFPreviewer({ file }: PDFPreviewerPropTypes) {
  const [nrPages, setNrPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNrPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error(error);
  };

  const onLoadError = (error) => {
    console.error(error);
  };

  const simpleLoader = useMemo(() => <SimpleLoader isLoading text="Loading invoice file ..." />, []);

  return (
    <div className="col-12 m-2 p-1">
      <div className="d-flex justify-content-center align-items-center">
        <Document
          file={file}
          onSourceError={onDocumentLoadError}
          loading={simpleLoader}
          onLoadError={onLoadError}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <div className="container">
            <div>
              <small className="text-muted text-center w-100 my-3">{GetFilename(file)}</small>
            </div>

            <div className="d-flex justify-content-end align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-light rounded-pill m-2"
                onClick={() => DownloadFile(file)}
              >
                <i className="fa-solid fa-download" />
              </button>
              {file && (
              <a href={file} target="_blank" role="button" className="btn btn-sm btn-light rounded-pill" rel="noreferrer">
                <i className="fa-solid fa-maximize" />
              </a>
              ) }
            </div>
            {[...Array(nrPages)].map((x, i) => (
              <div className="row justify-content-md-center my-3" key={i}>
                <Page pageNumber={i + 1} loading={simpleLoader} />
              </div>
            ))}
            <small className="text-muted text-center w-100 my-3">
              {' '}
              Nr. Pages
              {' '}
              {nrPages}
            </small>
          </div>
        </Document>
      </div>

    </div>
  );
}

export default PDFPreviewer;
