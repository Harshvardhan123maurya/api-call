import React, { Component } from 'react'
import React from "react";
import './App.css';
import User1 from 'component/pages/User1';
class User1 extends React.Component {
class App extends React.Component {
	constructor(props) {
       this.render(){
		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
			<h1> Fetch data from quotes api in react... </h1> {
				items.map((item) => (
				<h4>
					Text: { item.text },
					Author: { item.author },
				</h4>
				))
		</div>
	);
		}
