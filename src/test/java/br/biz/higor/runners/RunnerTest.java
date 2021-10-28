package br.biz.higor.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/alugar_filme.feature",
glue = "br.biz.higor.steps", 
plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, 
monochrome = false, 
snippets = SnippetType.CAMELCASE, 
dryRun = false, 
strict = false,
tags = {})
public class RunnerTest {

}
// teste