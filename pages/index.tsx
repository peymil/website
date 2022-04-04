import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="px-5 flex justify-between">
        <p className="">64K RAM SYSTEM</p>
        <p className="inline-block ml-auto">38911 BASIC BYTES FREE</p>
      </div>
      <p>READY</p>
      <div className={styles.asterisk} />
      <h1 className="inline mr-5">Emre BADEM</h1>
      <h2>Software Developer</h2>
      <br />
      <h2>Tool Stack:</h2>
      <div className="flex justify-between mr-1">
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>Golang</li>
        </ul>
        <ul>
          <li>NestJS</li>
          <li>ExpressJS</li>
          <li>Flask</li>
          <li>Flask</li>
          <li>Django</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
        <ul>
          <li>Docker</li>
          <li>Docker-Compose</li>
          <li>Jira</li>
          <li>Git</li>
          <li>Svn</li>
        </ul>
        <ul>
          <li>S3</li>
          <li>EC2</li>
          <li>Heroku</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
