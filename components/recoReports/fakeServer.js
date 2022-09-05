function FakeServer(allData) {
    alasql.options.cache = false;
  
    return {
      getData: function (request) {
        var results = executeQuery(request);
  
        return {
          success: true,
          rows: results,
          lastRow: getLastRowIndex(request, results),
        };
      },
    };
  
    function executeQuery(request) {
      var sql = buildSql(request);
  
      console.log('[FakeServer] - about to execute query:', sql);
  
      return alasql(sql, [allData]);
    }
  
    function buildSql(request) {
      return 'SELECT * FROM ?' + orderBySql(request) + limitSql(request);
    }
  
    function orderBySql(request) {
      var sortModel = request.sortModel;
  
      if (sortModel.length === 0) return '';
  
      var sorts = sortModel.map(function (s) {
        return s.colId + ' ' + s.sort.toUpperCase();
      });
  
      return ' ORDER BY ' + sorts.join(', ');
    }
  
    function limitSql(request) {
      if (request.endRow == undefined || request.startRow == undefined) {
        return '';
      }
      var blockSize = request.endRow - request.startRow;
  
      return ' LIMIT ' + (blockSize + 1) + ' OFFSET ' + request.startRow;
    }
  
    function getLastRowIndex(request, results) {
      if (!results || results.length === 0) {
        return null;
      }
      if (request.endRow == undefined || request.startRow == undefined) {
        return results.length;
      }
  
      var currentLastRow = request.startRow + results.length;
  
      return currentLastRow <= request.endRow ? currentLastRow : -1;
    }
  }