import React from 'react';
import { graphql } from 'gatsby';
import LayoutGenomic from '../components/layout-genomic';
import style from './genomic-basics.module.css';
import GenomicTitle from '../components/genomic-title';

const GenomicBasics = (props) => (
  <LayoutGenomic>
    <section id={style.sectionOne}>
      <GenomicTitle />
      <p>As human genetic sequencing becomes more common, organizations are strategizing how their IT infrastructures can help them seize new opportunities. Here are a few things to know about the human genome:</p>
      <p>Genetic code is expressed in long sequences of four different DNA molecules called “bases.”</p>
      <figure>
        <ul>
          <li>Adenine</li>
          <li>Thymine</li>
          <li>Guanine</li>
          <li>Cytosine</li>
        </ul>
      </figure>
      <p>A full human genome is made up of roughly 3.2 billion base pairs and 25,000 genes.</p>
      <figure>3.2 billion</figure>
    </section>
    <section>
      <figure>30GB - 150GB</figure>
      <p>Storage size for a complete human genome is between 30GB and 150GB – for the majority of patients, there is no medical need for sequencing the entire genome.</p>
    </section>
    <section>
      <p>&quote;Marker&quote; is the term for any changes in DNA relative to a &quote;reference&quote; or normal copy. This includes changes to:</p>
      <ul>
        <li>Single base pairs</li>
        <li>Insertion or deletion of a sequence of base pairs</li>
        <li>The number of copies of a given gene</li>
      </ul>
      <p>Because markers are a small subset of whole genome sequencing, storage needs are much smaller.</p>
    </section>
    <footer>
      <div>
        <p>Learn more about readying IT to take advantage genetic data. Download the full report from Gartner:</p>
        <a href="">Prepare your healthcare organization for the first wave of genomics</a>
      </div>
    </footer>
  </LayoutGenomic>
)

export default GenomicBasics