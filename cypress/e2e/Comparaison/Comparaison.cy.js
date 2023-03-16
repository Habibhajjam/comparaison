describe( 'Visual Capturing Suite', () => {
  it('should compare screenshot of the entire page', () => {
    cy.visit('https://www.fram.fr');
    cy.wait(2000); // Attendre que la page se charge complètement
    cy.get('#didomi-notice-agree-button').click(); // Fermer la bannière de cookies si elle existe
    cy.wait(500); // Attendre que la bannière se ferme
    //cy.screenshot('difference');
    cy.visit('https://www.promovacances.com');
    
  
  cy.compareSnapshot('difference')
  })
  })

/*describe('Visual Diff Suite', () => {
  it('should compare screenshots of production and pre-production', () => {
    // Visiter la page en production et prendre une capture d'écran
    cy.visit('https://www.fram.fr');
    cy.wait(2000); // Attendre que la page se charge complètement
    cy.get('#didomi-notice-agree-button').click(); // Fermer la bannière de cookies si elle existe
    cy.wait(500); // Attendre que la bannière se ferme
    cy.screenshot('difference');

  

    // Visiter la page en pré-production et prendre une capture d'écran
    cy.visit('https://preprod-www.fram.fr');
    cy.wait(2000); // Attendre que la page se charge complètement
    //cy.get('#didomi-notice-agree-button').click();// Fermer la bannière de cookies si elle existe
    cy.wait(500); // Attendre que la bannière se ferme

    cy.compareSnapshot()
    });

    // Comparer les deux captures d'écran et afficher la différence
    cy.task('compareScreenshots', {
      snapshot1: 'production',
      snapshot2: 'pre-production',
    }).then((result) => {
      if (result.code === 0) {
        cy.log('No visual differences found!');
      } else {
        if (result.diffImage) {
          cy.task('getDiffImage', result.diffImage).then((image) => {
            cy.log('Visual differences found:');
            cy.log(image);
          });
        } else {
          cy.log('Visual differences found, but no diff image available.');
          cy.screenshot('difference');
        }
      }
    });
  });
});
*/
/*
/*it('takes screenshots of the correction', () => {
    cy.visit('https://www.fram.fr');

   // cy.get('input').type('salut');
   // cy.get('form').submit();
   cy.wait(2000);
   cy.get('#didomi-notice-agree-button').click();
    cy.wait(500);

    cy.screenshot('baseline-home');
  });

  it('takes screenshots of the students project', () => {
    cy.visit('https://preprod-www.fram.fr');

   // cy.get('input').type('salut');
    //cy.get('form').submit();
    cy.wait(500);
    cy.wait(2000);
    cy.get('#didomi-notice-agree-button').click();
    cy.screenshot('student-home');
    cy.compareSnapshot('student-home','baseline-home');

  });
  

  
// code on commond.js file.
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
compareSnapshotCommand();

 // code on cypress.config.json 
 const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
      getCompareSnapshotsPlugin(on, config)

// .js test scenario on test file 
describe('compare the homepage screen shot with the application homepage', () => {
    it('should compare the homepage', () => {
        cy.visit('www.fram.fr');
        cy.wait(2000);
        cy.get('#didomi-notice-agree-button').click();
        cy.compareSnapshot('fixtures/healthcaresuccess-page.png', 0.001);
    })
});*/


/*const pages = [
    { url: 'https://www.fram.fr/', name: 'production-page' },
    { url: 'https://www.promovacances.com', name: 'pre-production-page' },
  ];

  describe('Screenshots comparison', () => {
    pages.forEach((page) => {
      it(`should match ${page.name} snapshot`, () => {
        cy.visit(page.url);
        cy.wait(2000);
        cy.get('#didomi-notice-agree-button').click();
        cy.screenshot(`screenshots/${page.name}`);
        cy.compareSnapshot(`screenshots/${page.name}`, {
            failureThreshold: 0.03,
            failureThresholdType: 'percent',
            capture: 'viewport',
            customDiffConfig: { threshold: 0.1 },
            diffDirection: 'horizontal',
            diffLabel: `diff-${page.name}`,
            thresholdType: 'percent',
            noColors: false,
            comparisonMethod: 'ssim',
        });
      });
    });
  });*/
 /* const urls = ['https://www.fram.fr/', 'https://www.promovacances.com'];

describe('Screenshots comparison', () => {
  it('should match screenshots', () => {
    urls.forEach((url) => {
      cy.visit(url);
      cy.wait(2000);
      cy.get('#didomi-notice-agree-button').click();
      cy.screenshot(`screenshots/${url.replace(/https?:\/\//gi, '')}`, {
        capture: 'viewport',
      });
    });

    cy.get('body').then((body) => {
      const firstUrl = urls[0].replace(/https?:\/\//gi, '');
      const secondUrl = urls[1].replace(/https?:\/\//gi, '');
      const firstScreenshot = `screenshots/${firstUrl}.png`;
      const secondScreenshot = `screenshots/${secondUrl}.png`;

      cy.compareScreenshots(
        firstScreenshot,
        secondScreenshot,
        `screenshots/diff-${firstUrl}-${secondUrl}`,
        {
          scaleImages: true,
          threshold: 0.01,
        }
      );

      cy.readFile(`screenshots/diff-${firstUrl}-${secondUrl}.png`, 'base64').then(
        (data) => {
          const imageSrc = 'data:image/png;base64,' + data;
          body.append(`<img src="${imageSrc}" />`);
        }
      );
    });
  });
});*/
