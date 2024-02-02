<?php

class Router {
    private $routes = [];

    public function __construct() {
        $this->addRoute('', function() {
            include('views/home.php');
        });
        
        $this->addRoute('projects', function() {
            include('views/projects.php');
        });

        $this->addRoute('skills', function() {
            include('views/skills.php');
        });

        $this->addRoute('experiences', function() {
            include('views/experiences.php');
        });

        $this->addRoute('contact', function() {
            include('views/contact.php');
        });
    }

    public function addRoute($path, $handler) {
        $this->routes[$path] = $handler;
    }

    public function handleRequest($path) {
        if (array_key_exists($path, $this->routes)) {
            $handler = $this->routes[$path];

            if (is_callable($handler)) {
                $handler();
            } else {
                echo "Invalid handler for route : $path";
            }
        } else {
            echo "404 Not Found";
        }
    }
}

?>