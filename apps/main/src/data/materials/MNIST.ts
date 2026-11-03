import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'MNIST' ],
    material: {
      type: 'dataset',
      title: 'The MNIST database of handwritten digits',
      author: [ { given: 'Yann', family: 'LeCun' }, { given: 'Corinna', family: 'Cortes' }, { given: 'Christopher J. C.', family: 'Burges' } ],
      medium: 'IDX',
      language: 'en',
      version: '3.0.1',
      URL: 'https://www.tensorflow.org/datasets/catalog/mnist',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      custom: {
        URL: [
          { link: 'http://yann.lecun.com/exdb/mnist/', display_text: 'Original dataset URL', note: 'Currently an empty directory listing.' },
          { link: 'https://datarepository.wolframcloud.com/resources/MNIST', display_text: 'Creator metadata: Wolfram Data Repository' },
          { link: 'https://raw.githubusercontent.com/tensorflow/datasets/master/tensorflow_datasets/image_classification/mnist.py', display_text: 'TensorFlow Datasets citation and CVDF mirror definitions', 'Content-Type': 'text/plain' },
        ],
        free_material: [
          { link: 'https://storage.googleapis.com/cvdf-datasets/mnist/train-images-idx3-ubyte.gz', display_text: 'Training images (IDX, GZIP; CVDF mirror)', 'Content-Type': 'application/gzip' },
          { link: 'https://storage.googleapis.com/cvdf-datasets/mnist/train-labels-idx1-ubyte.gz', display_text: 'Training labels (IDX, GZIP; CVDF mirror)', 'Content-Type': 'application/gzip' },
          { link: 'https://storage.googleapis.com/cvdf-datasets/mnist/t10k-images-idx3-ubyte.gz', display_text: 'Test images (IDX, GZIP; CVDF mirror)', 'Content-Type': 'application/gzip' },
          { link: 'https://storage.googleapis.com/cvdf-datasets/mnist/t10k-labels-idx1-ubyte.gz', display_text: 'Test labels (IDX, GZIP; CVDF mirror)', 'Content-Type': 'application/gzip' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
