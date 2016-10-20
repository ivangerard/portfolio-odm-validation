'use strict'

var chai = require('chai'),
    expect = chai.expect

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our todo model for our unit testing.
var Blogs = require('../models/blogs')
chai.should()
describe("Get all Blogs", function() {
    // Test will pass if we get all todos
    it("should return all the Blogs", function(done) {
        var BlogMock = sinon.mock(Blogs);
        var expectedResult = {
            status: true,
            article: [],
            contributor: [],
            comments: []
        };
        BlogMock.expects('find').yields(null, expectedResult);
        Blogs.find(function(err, result) {
            BlogMock.verify();
            BlogMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a todo
    it("should return error", function(done) {
        var BlogMock = sinon.mock(Blogs);
        var expectedResult = {
            status: false,
            error: "Something went wrong"
        };
        BlogMock.expects('find').yields(expectedResult, null);
        Blogs.find(function(err, result) {
            BlogMock.verify();
            BlogMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

// Test will pass if the todo is saved
describe("Post a new Blog", function() {
    it("should create new Blog", function(done) {
        var BlogMock = sinon.mock(new Blogs({
            article: "Gila Pusing pala aneh bro",
            contributor: "Orang keren Jakarta",
            comments: "Pintar kali orang ini"
        }));
        var blogs = BlogMock.object;
        var expectedResult = {
            status: true
        };
        BlogMock.expects('save').yields(null, expectedResult);
        blogs.save(function(err, result) {
            BlogMock.verify();
            BlogMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the todo is not saved
    it("should return error, if post not saved", function(done) {
        var BlogMock = sinon.mock(new Blogs({
            article: "Gila Pusing pala aneh bro",
            contributor: "Orang keren Jakarta",
            comments: "Pintar kali orang ini"
        }));
        var blogs = BlogMock.object;
        var expectedResult = {
            status: false
        };
        BlogMock.expects('save').yields(expectedResult, null);
        blogs.save(function(err, result) {
            BlogMock.verify();
            BlogMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});
