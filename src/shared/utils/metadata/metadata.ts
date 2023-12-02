import { Metadata } from 'next';
import { defaultMetadata } from './metadata.constants';

export const buildMetadata = (metadata: Metadata = {}): Metadata => ({ ...defaultMetadata, ...metadata });
